<template>
  <section class="section">
    <div class="container">
      <div class="about-content grid grid-1 grid-2-md">
        <div class="about-text">
          <h2 class="section-title">About Me</h2>
          <p>{{ aboutText }}</p>
          <div class="skills-container grid grid-2-sm grid-3-md">
            <h3>Skills & Technologies</h3>
            <div class="skills-grid">
              <div v-for="(skill, category) in skills" :key="category" class="skill-category">
                <h4>{{ category }}</h4>
                <ul>
                  <li v-for="item in skill" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="about-image">
          <img src="" alt="Profile picture">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// SEO 메타태그 설정
useSeoMeta({
  title: 'About Me | Ben Kim - Full Stack Developer',
  description: 'Learn about Ben Kim, a passionate Full Stack Developer with expertise in Vue.js, React, Node.js, Python, and Cloud Services. Years of experience building modern web applications.',
  ogTitle: 'About Ben Kim | Full Stack Developer',
  ogDescription: 'Passionate Full Stack Developer with expertise in modern web technologies.',
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
})

const aboutText = ref(`I'm a passionate full-stack developer with a keen interest in building modern web applications. 
With several years of experience in the industry, I've worked on various projects ranging from small business websites 
to large-scale enterprise applications.`);

const skills = ref({
  'Frontend': ['Vue.js', 'React', 'TypeScript', 'HTML/CSS'],
  'Backend': ['Node.js', 'Python', 'SQL', 'MongoDB'],
  'Tools': ['Git', 'Docker', 'AWS', 'Firebase']
});
</script>

<style scoped>
.about-image {
  margin: var(--space-xl) auto 0;
  max-width: 300px;
}

@media (max-width: 768px) {
  .about-content {
    gap: var(--space-xl);
  }

  .about-image {
    order: -1;
    margin-top: 0;
  }
}
</style> 