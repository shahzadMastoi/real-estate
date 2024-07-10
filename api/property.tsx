import axios from 'axios';

export async function getFeaturedProperty() {
  try {
    const response = await axios.get('http://localhost:3002/propertyData');
    return response.data
  } catch (error) {
    console.error(error);
  }
}


export async function postFeaturedProperty(data:any) {
    try {
      const response = await axios.post('http://localhost:3002/propertyData',data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

  export async function getAgencies() {
    try {
      const response = await axios.get('http://localhost:3002/agencies');
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
  
  
  export async function postAgencies(data:any) {
      try {
      await axios.post('http://localhost:3002/agencies',data);
        return {success: true}
      } catch (error) {
        console.error(error);
      }
    }
  


