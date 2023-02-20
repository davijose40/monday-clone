import { useState } from 'react'

const TicketPage = () => {
    const [formdata, setFormdata] = useState({
        status: "not started",
        progress: 0,
        timestamp: new Date().toISOString()
    })
    const editMode = false

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited')
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormdata((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const categories = ['test1', 'test2', 'test3', 'test4', 'test5']

    console.log(formdata)

    return (
        <div className="ticket">
            <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={handleChange}
                            required
                            value={formdata.title}
                        />

                        <label htmlFor="discription">Description</label>
                        <input
                            type="text"
                            id="discription"
                            name="discription"
                            onChange={handleChange}
                            required
                            value={formdata.discription}
                        />

                        <label htmlFor="categories">Category</label>
                        <select name="category" id="categories" value={formdata.category} onChange={handleChange}>
                            {categories?.map((category, _index) => (
                                <option key={_index} value={category}>{category}</option>
                            ))}
                        </select>

                        <label htmlFor="new-category">New Category</label>
                        <input
                            type="text"
                            id="new-category"
                            name="category"
                            onChange={handleChange}
                            required
                            value={formdata.category}
                        />

                        <label>Priority</label>
                        <div className='multiple-input-container'>
                            <input
                                type="radio"
                                id='priority-1'
                                name='priority'
                                onChange={handleChange}
                                value={1}
                                checked={formdata.priority === '1'}
                            />
                            <label htmlFor="priority-1">1</label>

                            <input
                                type="radio"
                                id='priority-2'
                                name='priority'
                                onChange={handleChange}
                                value={2}
                                checked={formdata.priority === '2'}
                            />
                            <label htmlFor="priority-2">2</label>

                            <input
                                type="radio"
                                id='priority-3'
                                name='priority'
                                onChange={handleChange}
                                value={3}
                                checked={formdata.priority === '3'}
                            />
                            <label htmlFor="priority-3">3</label>

                            <input
                                type="radio"
                                id='priority-4'
                                name='priority'
                                onChange={handleChange}
                                value={4}
                                checked={formdata.priority === '4'}
                            />
                            <label htmlFor="priority-4">4</label>

                            <input
                                type="radio"
                                id='priority-5'
                                name='priority'
                                onChange={handleChange}
                                value={5}
                                checked={formdata.priority === '5'}
                            />
                            <label htmlFor="priority-5">5</label>
                        </div>

                        {editMode &&
                            <>
                                <input
                                    type="range"
                                    id="progress"
                                    name="progress"
                                    value={formdata.progress}
                                    min="0"
                                    max="100"
                                    onChange={handleChange}
                                />
                                <label htmlFor="progress">Progress</label>


                                <label>Status</label>
                                <select name="status" value={formdata.status} onChange={handleChange}>
                                    <option selected={formdata.status === 'done'} value='done'>Done</option>
                                    <option selected={formdata.status === 'working on it'} value='working on it'>Working on it</option>
                                    <option selected={formdata.status === 'stuck'} value='stuck'>Stuck</option>
                                    <option selected={formdata.status === 'not started'} value='not started'>Not Started</option>
                                </select>
                            </>
                        }

                        <input type="submit" />
                    </section>

                    <section>
                        <label htmlFor="owner">Owner</label>
                        <input
                            type="text"
                            id="owner"
                            name="owner"
                            onChange={handleChange}
                            required
                            value={formdata.owner}
                        />

                        <label htmlFor="avatar">Avatar</label>
                        <input
                            type="url"
                            id="avatar"
                            name="avatar"
                            onChange={handleChange}
                            required
                            value={formdata.avatar}
                        />
                        <div className='img-preview'>
                            {formdata.avatar && (
                                <img src={formdata.avatar} alt="preview of Avatar image owner" />
                            )}
                        </div>
                    </section>

                </form>
            </div>
        </div>
    )
}

export default TicketPage