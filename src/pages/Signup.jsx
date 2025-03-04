import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('user', 'true'); // Foydalanuvchini ro‘yxatdan o‘tkazish
    navigate('/add'); // Himoyalangan sahifaga yo‘naltirish
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>
      <form className="max-w-sm mx-auto" onSubmit={handleSignup}>
        <input className="border p-2 w-full mb-4" type="text" placeholder="Full Name" required />
        <input className="border p-2 w-full mb-4" type="email" placeholder="Email" required />
        <button className="bg-indigo-500 text-white p-2 w-full">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
