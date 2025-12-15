interface FormData {
  name: string
  email: string
  message: string
  projectType?: string
}

interface SubmitResult {
  success: boolean
  message: string
}

export const useContactForm = () => {
  const config = useRuntimeConfig()
  const isSubmitting = ref(false)
  const submitResult = ref<SubmitResult | null>(null)

  const submitForm = async (formData: FormData): Promise<SubmitResult> => {
    isSubmitting.value = true
    submitResult.value = null

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: config.public.web3formsKey,
          ...formData,
          subject: `[Evergreen Dev] 새 프로젝트 문의 - ${formData.name}`,
          from_name: 'Evergreen Dev Website'
        })
      })

      const result = await response.json()

      if (result.success) {
        submitResult.value = {
          success: true,
          message: '문의가 성공적으로 전송되었습니다. 24시간 이내 회신드리겠습니다.'
        }
      } else {
        throw new Error(result.message || 'Form submission failed')
      }
    } catch (error) {
      submitResult.value = {
        success: false,
        message: '전송에 실패했습니다. 이메일로 직접 문의해 주세요.'
      }
    } finally {
      isSubmitting.value = false
    }

    return submitResult.value
  }

  const resetForm = () => {
    submitResult.value = null
  }

  return {
    isSubmitting,
    submitResult,
    submitForm,
    resetForm
  }
}
