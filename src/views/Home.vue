<template>

  <div class="heim">

  </div><!-- .heim -->

</template>

<script>

import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyAq43fXL9vbj0BIIroXpVMx-Gwf8jBnCjM",
    authDomain: "posts-6096d.firebaseapp.com",
    databaseURL: "https://posts-6096d.firebaseio.com",
    projectId: "posts-6096d",
    storageBucket: "",
    messagingSenderId: "359177559357"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let postsRef = db.ref('posts');

export default {
firebase: {
 posts: postsRef
},

data () {
return {
      newPost: {
        // blog posts
        img: '',
        title: '',
        desc: '',
        category: '',
        time: '',
        date: '',
        // my work
        workimg: '',
        worktitle: '',
        workdesc: '',
        // playlist
        movieimg: '',
        moviename: '',
        movieinfo: '',
      }  
    }
  },
  methods: {
    addPost: function(){
      postsRef.push(this.newPost);
      this.newPost.img = '';
      this.newPost.title = '';
      this.newPost.desc = '';
      this.newPost.category = '';
      this.newPost.time = '';
      this.newPost.date = '';
      this.newPost.workimg = '';
      this.newPost.worktitle = '';
      this.newPost.workdesc = '';
      this.newPost.movieimg = '';
      this.newPost.moviename = '';
      this.newPost.movieinfo = '';
    },
    removePost: function(post){
      postsRef.child(post['.key']).remove();
    }
  }
}
</script>
