import React, { useState } from "react";

function RecipeCreate({setRecipes, handleCreate}) {
  const initFormState = {
    name: '',
    cuisine:'',
    photo:'',
    ingredients:'',
    preparation:'',
  }
 
  const [formData, setFormData] = useState({...initFormState})
  
  const handleChange = ({target}) => setFormData({...formData, [target.name]: target.value})
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    handleCreate(formData)
    setFormData({...initFormState})
  }
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                id='name'
                name='name'
                type='text'
                placeholder="Name"
                onChange={handleChange}
                defaultValue={formData.name}
                />
              </label>
            </td>
            <td>
            <label htmlFor="cuisine">
                <input
                id='cuisine'
                name='cuisine'
                type='text'
                placeholder="Cuisine"
                onChange={handleChange}
                defaultValue={formData.cuisine}
                />
              </label>
            </td>
            <td>
            <label htmlFor="photo">
                <input
                id='photo'
                name='photo'
                type='url'
                placeholder="URL"
                onChange={handleChange}
                defaultValue={formData.photo}
                />
              </label>
            </td>
            <td>
            <label htmlFor="ingredients">
                <textarea
                id='ingredients'
                name='ingredients'
                type='text'
                placeholder="Ingredients"
                rows={3}
                onChange={handleChange}
                defaultValue={formData.ingredients}
                ></textarea>
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                id='preparation'
                name='preparation'
                type='text'
                placeholder="Preparation"
                rows={2}
                onChange={handleChange}
                defaultValue={formData.preparation}
                ></textarea>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers
