import { useNavigate } from "react-location";
import { useRecoilState } from "recoil";
import { LoggedInAtom, UserIdAtom } from "./AppAtoms";

const PrivateRoute = ({ children }) => {
  const [loggedIn, setLoggedIn] = useRecoilState(LoggedInAtom);
  const navigate = useNavigate();

  if (!loggedIn) {
    return navigate({ to: `/login` });
  }

  return children;
};

export default PrivateRoute;
