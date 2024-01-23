import React, {Component} from 'react';

const CreatePost = () => {
    const [postText, setPostText] = Component('');
  
    const handlePostChange = (event) => {
      setPostText(event.target.value);
    };
  
    const handlePostSubmit = () => {
      console.log('Postagem enviada:', postText);
    };
  
    return (
      <div>
        <h2>Criar Postagem</h2>
        <textarea
          placeholder="Digite sua postagem aqui..."
          value={postText}
          onChange={handlePostChange}
        />
        <br />
        <button onPress={handlePostSubmit}>Publicar</button>
      </div>
    );
  };
  
  export default CreatePost;