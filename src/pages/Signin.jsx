import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    localStorage.setItem('user', 'true');
    navigate('/add');
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">Sign In</h2>
      <form className="max-w-sm mx-auto" onSubmit={handleSignin}>
        <input className="border p-2 w-full mb-4" type="email" placeholder="Email" required />
        <button className="bg-indigo-500 text-white p-2 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
