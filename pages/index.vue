<template>
    <div class="main">
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
            {{ isMobileMenuOpen ? '닫기' : '메뉴' }}
        </button>
        <article class="side_bar" :class="{ 'open': isMobileMenuOpen }">
            <aside>
                <div class="profile_img">
                    <img src="../assets/img/img1.png" alt="증명사진">
                </div>
                <div class="name">
                    <h2 class="korean_name">김동현</h2>
                    <p class="eng_name">Ben Kim</p>
                    <p class="simple_introduction">개발자</p>
                </div>
                <nav class="menu">
                    <ul>
                        <li v-for="item in menuItems" :key="item.id">
                            <a href="#" @click.prevent="scrollTo(item.id)">{{ item.name }}</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </article>
        <section class="contents" :class="{'sidebar-hidden': !isMobileMenuOpen}">
            <div id="home" ref="home" class="home">
                <p class="intro">안녕하세요. 저는 개발자 김동현입니다.</p>
            </div>
            <div id="about" ref="about" class="about">
                <h2>about 영역</h2>
            </div>
            <div id="skills" ref="skills" class="skills">
                <h2>기술 스택</h2>
                <ul>
                    <li>리스트 영역</li>
                </ul>
            </div>
            <!-- 다른 섹션들도 이와 같이 추가 -->
        </section>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const menuItems = [
    {id: 'home', name: 'HOME'},
    {id: 'about', name: 'ABOUT'},
    {id: 'skills', name: 'SKILLS'},
    {id: 'project', name: 'PROJECT'},
    {id: 'results', name: 'RESULTS'},
    {id: 'contact', name: 'CONTACT'},
]

const skills = ref(null);
let isMobileMenuOpen = ref(false);

onMounted(() => {
    //setScreenSize();
})

const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    //document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log('setScreenSize', vh);
    
}

const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
        isMobileMenuOpen.value = false;
        el.scrollIntoView({behavior: 'smooth'})
    }
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

</script>

<style>
@keyframes fadeInOut {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    50% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
}

:root {
    --main-padding: 20px;
    //--sidebar-max-width: 20%;
    --sidebar-max-width: 500px;
}

.main {
    display: flex;
    padding: 0;

    /* 사이드바 영역*/
    .side_bar {
        position: fixed;
        height: 100vh;
        padding: 100px 0 0 0;
        width: 100%;
        max-width: var(--sidebar-max-width);
        border-right: 1px solid #ccc;
        text-align: center;
        box-sizing: border-box;
        transition: transform 0.5s ease;
        background-color: #f9f9f9;
        overflow: hidden;

        .profile_img img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
        }

        .name{
            padding: 10px;
            .korean_name {
                font-size: 2rem;
                color: #333;
                margin-bottom: 0;
            }
            .eng_name {
                font-family: 'Playfair Display', serif;
                font-size: 1.2rem;
                color: #666;
                margin-top: 5px;
            }
            .simple_introduction {
                font-size: 1rem;
                color: #999;
                margin-top: 5px;
            }
        }

        .menu {
            font-family: 'Nunito', serif;
            ul {
                list-style-type: none;
                padding: 0;
            }
            li {
                margin-bottom: 10px;
                padding: 2px;
            }
            a {
                text-decoration: none;
                color: #333;
            }
        }
    }

    /* 컨텐츠 영역 */
    .contents {
        flex-grow: 1;
        overflow-x: hidden;
        overflow-y: auto;
        margin-left: var(--sidebar-max-width);
        width: calc(100% - var(--sidebar-max-width));
        //width: 100%;
        padding-left: 10%;
        padding-top: 2%;
        box-sizing: border-box;
        transition: margin-left 0.5s ease; /* 부드러운 전환 효과 추가 */
        top: 100px;
        
        .home {
            height: 100vh;
            
            .intro {
                font-size: 2rem;
                color: #333;
                position: absolute;
                top: 10%;
                animation: fadeInOut 6s ease-in-out infinite;
            }
        }
        
        .about {
            height: 100vh;
        }

        .skills {
            height: 100vh;
        }
    }
    
}

.mobile-menu-toggle {
    display: none;
}



/* 모바일 화면 */
@media (max-width: 768px) {
    .main {
        flex-direction: column;
        padding: 0;
    }

    .side_bar {
        //width: 80%;
        max-width: 300px;
        transform: translateX(-100%);
        z-index: 1000;
        position: fixed;
        //top: 0;
        //left: 0;
        transition: transform 0.5s ease;
        
    }

    .side_bar.open {
        transform: translateX(-14%);
    }

    .mobile-menu-toggle {
        display: block;
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 1002;
        transition: left 0.5s ease;
    }

    .contents {
        margin-left: 0;
        width: 100%;
        
        //padding-left: 0;
        //padding-top: 60px;
    }

    .contents.sidebar-hidden {
        margin-left: 0;
        width: 100%;
    }
}
</style>
