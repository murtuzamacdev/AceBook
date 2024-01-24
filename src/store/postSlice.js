import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "postSlice",
    initialState: [
        {
            likes:23,
            reaction:2,
            comments:{
              count:2,
              comment1:"Nice picture",
              comment2:"Woww"
            },
            profileName:"Anand Raj",
            profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            status:" It's my first post guys cheer me up ...",
            postPicture:"https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=100x100&w=is&k=20&c=ROR_qpj-XI_RBFyI68FlNF9MiwGdXMSE-sOXv7Pb-r4=",
            
          },
          {
            likes:3,
            reaction:2,
            comments:{
              count:2,
              comment1:"Nice picture",
              comment2:"Woww"
            },
            profileName:"Ajay Kumar Singh",
            profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            status:" It's my first post guys cheer me up ...",
            postPicture:"https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
            
          },
          {
            likes:13,
            reaction:2,
            comments:{
              count:2,
              comment1:"Nice picture",
              comment2:"Woww"
            },
            profileName:"Jana bai",
            profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            status:" It's my first post guys cheer me up ...",
            postPicture:"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
            
          },
          {
            likes:29,
            reaction:2,
            comments:{
              count:2,
              comment1:"Nice picture",
              comment2:"Woww"
            },
            profileName:"Pankaj Gupta",
            profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            status:" It's my first post guys cheer me up ...",
            postPicture:"https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg",
            
          },
          {
            likes:15,
            reaction:2,
            comments:{
              count:2,
              comment1:"Nice picture",
              comment2:"Woww"
            },
            profileName:"Raju Srivastava",
            profilePicture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            status:" It's my first post guys cheer me up ...",
            postPicture:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
            
          }
    ]
})

export default postSlice.reducer