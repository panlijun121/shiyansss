import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

class Router extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    {
                        this.props.routes.map(v=>{
                            if(v.path==='*'){
                                return <Redirect key={v.path} to={v.redirect}></Redirect>
                            }else{
                                return <Route key={v.path} path={v.path} component={v.component}></Route>
                            }
                        })
                    }
                </Switch>
            </div>
        )
    }
}
export default Router