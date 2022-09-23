import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createPost, updatePost } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';



const Form=({ getId, setId})=>{
    const {register, handleSubmit, reset, setValue} = useForm();

    const post = useSelector(state => state.posts.find(post=> post._id === getId? post : null));

    const dispatch = useDispatch();
        
    useEffect(()=>{
        if (getId !== 0){
            let keys = Object.keys(post);
            keys.forEach(key => setValue(key, post[key]))
        }
    }, [getId, post, setValue])

    const onSubmit = data =>{
        if (getId === 0){
            dispatch(createPost(data))
            reset()
        }else{
            dispatch(updatePost(getId, data))
            reset()
            setId(0)
        }
    }

    return(
        <div className='form-container'>
            <h2>Write a Post</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <input 
                        type='text'
                        name='author'
                        placeholder='Author'
                        {...register('author')}
                        required
                    />
                </div>

                <div>
                    <input 
                        type='text'
                        name='title'
                        placeholder='Title'
                        {...register('title')}
                        required
                    />
                </div>

                <div>
                    <textarea 
               
                        name='article'
                        placeholder='Article'
                        {...register('article')}
                        required
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form