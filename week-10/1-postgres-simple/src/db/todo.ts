import { client } from "..";

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string,
) {
  try {
    const query = `
            INSERT INTO todos (user_id, title, description)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
    const result = await client.query(query, [userId, title, description]);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating todo: ${error}`);
  }
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    const query = `
            UPDATE todos
            SET done = true
            WHERE id = $1
            RETURNING *;
        `;
    const result = await client.query(query, [todoId]);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error updating todo: ${error}`);
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    const query = `
            SELECT * FROM todos
            WHERE user_id = $1;
        `;
    const result = await client.query(query, [userId]);
    return result.rows;
  } catch (error) {
    throw new Error(`Error fetching todos: ${error}`);
  }
}

