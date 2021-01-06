<template>
  <div>
    <div v-for="(post, key) in Posts" :key="key">
      <hr>
      <p>カテゴリ: {{ post.category.name }}</p>
      <p>タイトル: {{ post.title }}</p>
      <p>紹介文: {{ post.lead_text }}</p>
      <p>本文: {{ post.main_text }}</p>
<!--      <p>投稿日: {{ post.created_at }}</p>-->
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Posts: []
    };
  },
  mounted() {
    // this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.axios
      // .get('/api/posts/')
      .get("http://127.0.0.1:8080/blog/api/posts/")
      .then(response => (this.Posts = response.data));
  }
};
</script>


<!--<template>-->
<!--    <section class="container">-->
<!--        <article class="post" v-for="post of postList" :key="post.id">-->
<!--            <figure>-->
<!--&lt;!&ndash;                <img :src="post.thumbnail" :alt="post.title" class="thumbnail">&ndash;&gt;-->
<!--            </figure>-->
<!--            <p class="post-category" :style="{'color': post.category.color}">{{post.category.name}}</p>-->
<!--            <h2 class="post-title">{{post.title}}</h2>-->
<!--            <p class="post-lead">{{post.lead_text}}</p>-->
<!--        </article>-->
<!--    </section>-->
<!--</template>-->

<!--&lt;!&ndash;<script src="https://unpkg.com/vue"></script>&ndash;&gt;-->
<!--&lt;!&ndash;<script src="https://unpkg.com/axios/dist/axios.min.js"></script>&ndash;&gt;-->
<!--<script>-->
<!--    // import {AxiosInstance as axios} from "axios";-->

<!--    export default {-->
<!--        name: 'post-list',-->
<!--        data() {-->
<!--            return {-->
<!--                postList: [],-->
<!--            }-->
<!--        },-->

<!--        // mounted:function(){-->
<!--        // axios.get(`/blog/api/posts/`).then(function(response){-->
<!--        //   console.log(response);-->
<!--        //   for(let i = 0; i < response.data.length; i++) {-->
<!--        //     response.data[i].showContent = false;-->
<!--        //   }-->
<!--        //   this.releases = response.data;-->
<!--        //   }.bind(this))-->
<!--        //   .catch(function(error) {-->
<!--        //     console.log(error);-->
<!--        //   });-->
<!--        // },-->

<!--        mounted() {-->
<!--            this.$http(this.$httpPosts,{-->
<!--                header:{-->
<!--                    'Content-Type': 'application/json',-->
<!--                    'Accept': 'application/json',-->
<!--                    'dataType': 'json',-->
<!--                    'processData': false,-->
<!--                }-->
<!--            }, {-->
<!--                'mode': 'no-cors'-->
<!--            })-->
<!--            .then(response => {-->
<!--                console.log(response);-->
<!--                console.log('あああ');-->
<!--                return response.json();-->
<!--                // this.postList = response-->
<!--                // return response.json()-->
<!--            })-->
<!--            .then(response => response.json())-->
<!--            .then(data => {-->
<!--                console.log('いいいあああ');-->
<!--                // console.log(data);-->
<!--                return data-->
<!--            })-->
<!--            .catch(error => alert(error.message));-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--    #lead {-->
<!--        color: #999999;-->
<!--    }-->

<!--    section {-->
<!--        margin-top: 80px;-->
<!--    }-->

<!--    .thumbnail {-->
<!--        width: 100%;-->
<!--        height: auto;-->
<!--        vertical-align: bottom;-->
<!--    }-->

<!--    .post {-->
<!--        text-decoration: none;-->
<!--        color: #000;-->
<!--        margin-bottom: 80px;-->
<!--        display: block;-->
<!--    }-->

<!--    .post-category {-->
<!--        margin-top: 25px;-->
<!--        font-size: 12px;-->
<!--    }-->

<!--    .post-title {-->
<!--        font-weight: bold;-->
<!--        font-size: 14px;-->
<!--        width: 100%-->
<!--    }-->

<!--    .post-lead {-->
<!--        margin-top: 10px;-->
<!--        width: 100%;-->
<!--    }-->

<!--    .divider {-->
<!--        margin-top: 50px;-->
<!--        margin-bottom: 25px;-->
<!--        width: 100%;-->
<!--        height: 1px;-->
<!--        border: none;-->
<!--        background-color: #ccc;-->
<!--    }-->

<!--    #page {-->
<!--        color: #999;-->
<!--    }-->

<!--    #back {-->
<!--        width: 44px;-->
<!--        margin-right: 16px;-->
<!--        display: inline-block;-->
<!--    }-->

<!--    #next {-->
<!--        margin-left: 44px;-->
<!--        width: 44px;-->
<!--        display: inline-block;-->
<!--    }-->

<!--    @media (min-width: 768px) {-->
<!--        section {-->
<!--            display: grid;-->
<!--            grid-template-columns: 340px 340px;-->
<!--            column-gap: 20px;-->
<!--            row-gap: 100px;-->
<!--        }-->

<!--        .thumbnail {-->
<!--            width: 340px;-->
<!--            height: 212px;-->
<!--            object-fit: cover;-->
<!--        }-->

<!--        .post {-->
<!--            margin-bottom: 0;-->
<!--        }-->

<!--        .post-title {-->
<!--            width: 280px;-->
<!--        }-->

<!--        .post-lead {-->
<!--            width: 280px;-->
<!--        }-->

<!--        .divider {-->
<!--            width: 650px;-->
<!--        }-->
<!--    }-->

<!--    @media (min-width: 1024px) {-->
<!--        section {-->
<!--            grid-template-columns: 480px 480px;-->
<!--        }-->

<!--        .thumbnail {-->
<!--            width: 480px;-->
<!--            height: 300px;-->
<!--        }-->

<!--        .post-title {-->
<!--            width: 440px;-->
<!--        }-->

<!--        .post-lead {-->
<!--            width: 440px;-->
<!--        }-->
<!--    }-->
<!--</style>-->