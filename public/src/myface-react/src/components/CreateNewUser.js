import './Styles/Forms.scss'
import './Styles/Buttons.scss'
import '../index'

export function CreateNewUser() {
    return (
        <div class="page-container" id="page-container">
            <div>
            <h1 className='title'>New User</h1>
            <form class="create-item-form" method="post" action="/users/create">
                <label class="form-item">
                    <div>Name</div>
                    <input class="form-input" type="text" name="name" required />
                </label>
                <label class="form-item">
                    <div>Username</div>
                    <input class="form-input" type="text" name="username" required />
                </label>
                <label class="form-item">
                    <div>Email</div>
                    <input class="form-input" type="email" name="email" required />
                </label>
                <label class="form-item">
                    <div>Profile Image</div>
                    <input class="form-input" type="url" name="profileImageUrl" required />
                </label>
                <label class="form-item">
                    <div>Cover Image</div>
                    <input class="form-input" type="url" name="coverImageUrl" required />
                </label>
                <button class="standard-button" type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}