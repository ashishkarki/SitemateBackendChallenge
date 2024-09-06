import  React, { useState, ChangeEvent, FormEvent } from 'react';
import { createIssue } from '../services/api';

const CreateIssue = (): React.ReactNode => {
  const [issue, setIssue] = useState<{ title: string, description: string }>({ title: '', description: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    createIssue(issue)
      .then((response: any) => console.log('Issue Created:', response.data))
      .catch((error: any) => console.error('Error:', error));
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIssue({ ...issue, title: e.target.value });
  }


  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIssue({ ...issue, description: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Issue</h2>
      <input
        type='text'
        placeholder='Title'
        value={issue.title}
        onChange={handleTitleChange}
      />
      <input
        type='text'
        placeholder='Description'
        value={issue.description}
        onChange={handleDescriptionChange}
      />
      <button type='submit'>Create</button>
    </form>
  );
}

export default CreateIssue;
