import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import s from './GoBackBtn.module.css';

export default function GoBackBtn() {
  const navigate = useNavigate();
  const location = useLocation();
  const goBackUrl = useRef(location.state?.from);

  const handleGoBack = () => {
    navigate(`${goBackUrl.current}`, { replace: false });
  };
  return (
    <button className={s.btn} type="button" onClick={handleGoBack}>
      &#8592; Go back
    </button>
  );
}
