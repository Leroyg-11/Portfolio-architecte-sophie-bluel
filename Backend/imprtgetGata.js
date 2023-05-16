
export default async function getDataWorks() {
    try {
      const response = await fetch("http://localhost:5678/api/works/");
      const dataWorks = await response.json();
      return dataWorks;
    } catch (error) {
      console.log(error);
    }
  }