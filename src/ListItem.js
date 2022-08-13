import React from "react";

function ListItem({ recipes, handleDelete }) {
  return recipes.map((recipe, index) => {
        return (
          <tr key={index}>
            <td>
              {recipe.name}
            </td>
            <td>
              {recipe.cuisine}
            </td>
            <td>
              <img src={recipe.photo} alt={recipe.name}/>
            </td>
            <td className='content_td'>
              <p>{recipe.ingredients}</p>
            </td>
            <td className='content_td'>
              <p>{recipe.preparation}</p>
            </td>
            <td>
              <button name="delete" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
}

export default ListItem;
