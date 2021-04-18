import React from 'react'
import {connect} from "react-redux";
import {createPost,showAlert,hideAlert} from '../redux/actions'
import {Alert} from '../components/Alert'
class PostForm extends React.Component
{
constructor(props) {
    super(props);
    this.state = {
        title:''
    }
}
submitHandler = event =>
{
    event.preventDefault()

        const {title} = this.state
    if(!title.trim())
    {

        return this.props.showAlert('The form must not be empty')
    }
    if(this.props.alert !== null )
    {

    }



        const newPost = {
        title, id:Date.now().toString()
    }

    this.props.createPost(newPost)
    this.setState({title:''})
}
changeInputHandler = event =>
{
    event.persist()
    this.setState(prev => ({...prev, ...{
        [event.target.name]: event.target.value
    }}))
}

render() {
    return(
       <form className="postForm" onSubmit={this.submitHandler}>

           {this.props.alert &&< Alert text={this.props.alert} />}
           <p>Post Form</p>
           <input typeof="text"
           className='form__input'
                  id='title'
                  name='title'
                  placeholder="Enter Post Title"
                  value={this.state.title}
                    onChange={this.changeInputHandler}
           />
           <button onClick={this.submitHandler} className='postForm_button'>Add</button>
       </form>
    )
}

}
const mapDispatchToProps = {
    createPost, showAlert,hideAlert
}
const mapStateToProps = state =>({

    alert: state.app.alert
})

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)
