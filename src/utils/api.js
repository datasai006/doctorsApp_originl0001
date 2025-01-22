// utils/api.js
let hospitals = [
    {
      id: 1,
      name: 'City Hospital',
      address: '123 Main St',
      location: 'Downtown',
      mobile: '1234567890',
      alternateMobile: '0987654321',
    },
  ];
  
  export const getHospitals = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(hospitals), 500);
    });
  };
  
  export const addHospital = async (hospital) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        hospital.id = hospitals.length + 1;
        hospitals.push(hospital);
        resolve(hospital);
      }, 500);
    });
  };
  
  export const updateHospital = async (id, updatedData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = hospitals.findIndex((hospital) => hospital.id === id);
        if (index !== -1) {
          hospitals[index] = { ...hospitals[index], ...updatedData };
          resolve(hospitals[index]);
        } else {
          resolve(null); // Hospital not found
        }
      }, 500);
    });
  };
  
  export const deleteHospital = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        hospitals = hospitals.filter((hospital) => hospital.id !== id);
        resolve();
      }, 500);
    });
  };
  