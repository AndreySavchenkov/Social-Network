import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {auth} from "../redux/selectors.";

export const WithAuthRedirect = (Component: any) => {

    let RedirectComponent:React.FC = (props) => {

        const {
            isAuth
        } = useSelector(auth)

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }

    return RedirectComponent
}