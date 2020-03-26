document.addEventListener('DOMContentLoaded', e => {
    const app = firebase.app()
    const db = firebase.firestore()
    const myPost = db.collection('posts').doc('firstpost')
    myPost.onSnapshot(doc => {
        const data = doc.data()
        document.querySelector('#title').innerHTML = data.title
    })
})

function updatePost(e) {
    const db = firebase.firestore()
    const myPost = db.collection('posts').doc('firstpost')
    myPost.update({ title: e.target.value })
}

// document.addEventListener('DOMContentLoaded', e => {
//     const app = firebase.app()
//     const db = firebase.firestore()
//     const myPost = db.collection('posts').doc('firstpost')
//     myPost.onSnapshot(doc => {
//         const data = doc.data()
//         document.write(data.title + '<br>')
//         document.write(data.createdAt + '<br>')
//     })
// })

// function googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider()

//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const user = result.user
//             document.write(`Hello ${user.displayName}`)
//             console.log(user)
//         })
//         .catch(console.log)
// }