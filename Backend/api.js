async function getDataWorks() {
  // console.log('getDataWorks')
    try {
      const response = await fetch("http://localhost:5678/api/works/");
      const dataWorks = await response.json();
      return dataWorks;
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  async function getDataCategory() {
    // console.log('getDataCategory')
    try {
      const response = await fetch("http://localhost:5678/api/categories/");
      const DataCategory = await response.json();
      return DataCategory;
    } catch (error) {
      console.log(error);
    }
  }

  export { getDataCategory, getDataWorks }