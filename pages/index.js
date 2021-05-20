 import useAuth from './../hooks/useAuth';

export default function home() {

  const { user, signin } = useAuth();
  console.log('user', user);
  return (
    <div>
      <h2>GUSTAVO ABEL</h2>
      <button onClick={() => signin()}>Entrarr com github</button>
    </div>
  )

}
