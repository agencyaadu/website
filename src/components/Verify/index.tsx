import React, { useState } from 'react';
import './Verify.scss';

const Verify: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [inputEmail, setInputEmail] = useState<string>('');
  const [verificationResult, setVerificationResult] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add email here
    const validEmails = ['freddy@aadu.agency', 'sahu@aadu.agency', 'pk@aadu.agency', 'aster@aadu.agency'];

    if (validEmails.includes(inputEmail.toLowerCase())) {
      setVerificationResult('Verified ID');
    } else {
      setVerificationResult('Invalid ID');
    }
  };

  return (
    <>
    <div className="verify-wrapper">
        <div className="verify-container">
            <div className="aa-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="62" viewBox="0 0 92 62" fill="none">
                <path d="M34.1182 61.1295V60.2061L36.4187 59.375C37.6459 58.8825 38.5964 58.2977 39.2714 57.6205C39.9465 56.8818 40.4986 55.8661 40.9278 54.5733L59.8843 0H67.7062L86.3867 54.9427C86.8777 56.297 87.4298 57.3435 88.043 58.0822C88.6563 58.7594 89.6074 59.3442 90.8957 59.8367L92 60.2061V61.1295H68.6264V60.2061L70.0067 59.7444C71.2951 59.2519 72.0621 58.5747 72.3073 57.7129C72.6142 56.7895 72.5834 55.7122 72.2153 54.481L67.8903 41.1839H47.4614L43.0443 54.2039C42.6151 55.5582 42.4613 56.6356 42.5842 57.4359C42.7682 58.2361 43.5044 58.8825 44.7927 59.375L46.8172 60.2061V61.1295H34.1182ZM48.1055 39.3371H67.3381L58.0439 10.6192L48.1055 39.3371Z" fill="#461F09"/>
                <path d="M9.45525 61.9999C6.78662 61.9999 4.53208 61.2381 2.69164 59.7145C0.897214 58.1908 0 55.9977 0 53.1352C0 50.9652 1.10426 48.9799 3.31279 47.1792C5.52132 45.3324 8.99514 43.9473 13.7343 43.0239C14.4704 42.8854 15.2986 42.7469 16.2189 42.6084C17.1391 42.4237 18.1053 42.239 19.1176 42.0543V36.5831C19.1176 33.4436 18.7265 31.2505 17.9443 30.0039C17.2081 28.7111 16.0348 28.0647 14.4244 28.0647C13.3202 28.0647 12.446 28.4341 11.8018 29.1728C11.1577 29.8654 10.7436 31.0889 10.5595 32.8433L10.4215 33.6052C10.3295 35.5905 9.84635 37.0448 8.97214 37.9682C8.09793 38.8917 7.01667 39.3534 5.72837 39.3534C4.53208 39.3534 3.54284 38.984 2.76066 38.2453C1.97847 37.5065 1.58738 36.5139 1.58738 35.2673C1.58738 33.3743 2.23153 31.7814 3.51984 30.4887C4.85416 29.1959 6.60257 28.2263 8.76509 27.5799C10.9276 26.9335 13.2742 26.6104 15.8048 26.6104C19.8997 26.6104 23.0515 27.6261 25.26 29.6576C27.5146 31.6429 28.6418 34.8979 28.6418 39.4226V54.7281C28.6418 56.8057 29.6081 57.8446 31.5405 57.8446H33.0589L33.68 58.3986C32.8058 59.5067 31.8396 60.3608 30.7813 60.9611C29.7691 61.5613 28.3198 61.8614 26.4333 61.8614C24.4088 61.8614 22.7984 61.3997 21.6022 60.4763C20.4519 59.5067 19.6927 58.237 19.3246 56.6672C17.9443 58.1447 16.5179 59.4144 15.0456 60.4763C13.6192 61.492 11.7558 61.9999 9.45525 61.9999ZM13.6653 57.7753C14.5855 57.7753 15.4367 57.5675 16.2189 57.152C17.0471 56.6903 18.0133 55.9977 19.1176 55.0743V43.4394C18.6574 43.5318 18.1973 43.6241 17.7372 43.7164C17.2771 43.8088 16.748 43.9011 16.1498 43.9935C14.0333 44.5475 12.3309 45.494 11.0426 46.8329C9.80034 48.1257 9.17919 49.8802 9.17919 52.0964C9.17919 53.9893 9.61629 55.4206 10.4905 56.3902C11.3647 57.3136 12.423 57.7753 13.6653 57.7753Z" fill="#461F09"/>
            </svg>
            </div>
            <div className="verify-content">
            <div className="line"></div>
            <div className="content">
                <p>Verification</p>
                <form className="input" onSubmit={handleFormSubmit}>
                  <input type="email" placeholder='ENTER YOUR ID' className='input-email' value={inputEmail} onChange={handleInputChange} />
                  <button type='submit' className='email-submit' onClick={() => setIsPressed(true)} >Enter</button>
                </form>
                { isPressed ? (<h5 className='colorverified' style={{ color: verificationResult === 'Verified ID' ? '#ABCE96' : '#FF6C6C' }}>{verificationResult}</h5>) : null }

                <h5>EMAILS, TELEGRAM AND DISCORD IDS CAN BE VERIFIED HERE</h5>
            </div>
            <div className="line"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Verify;