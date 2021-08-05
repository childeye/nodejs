import React, {memo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/ImageFileInput";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
    <ImageFileInput {...props} imageUploader={imageUploader} />
));

const cardRepository = new CardRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);

