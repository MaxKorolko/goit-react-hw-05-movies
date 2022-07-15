import { useNavigate } from 'react-router-dom';
import s from './GoBackBtn.module.css';

export default function GoBackBtn() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button className={s.btn} type="button" onClick={handleGoBack}>
      &#8592; Go back
    </button>
  );
}
