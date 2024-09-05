import axios from "axios";
import { setPendaf } from "../Reducers/pendaftaranMagang";

export const regisPendaftaran = (data, navigate) => async (dispatch, getState) => {
    console.log("data pendaf", data);
  
    try {
      // Mengirimkan permintaan POST ke API register dengan formData dan header multipart/form-data
      const response = await axios.post(
        `http://localhost:5000/api/internship-form`,
        data,
        {
          headers: {
           "Content-Type": "application/json",
          },
        }
      );
      dispatch(setPendaf(response));
      console("Data Rsponse",response)
      // Cek jika respons status adalah 201 (Created)
      if (response.status === 201) {
        console.log("Register Berhasil:", response);
        alert("Registrasi berhasil!");
        navigate("/login");
      }
    } catch (error) {
      // Penanganan kesalahan saat melakukan permintaan
      console.error("Error during registration:", error);
  
      // Tampilkan alert jika registrasi gagal
      alert("Registrasi gagal. Silakan coba lagi.");
    }
  };
  