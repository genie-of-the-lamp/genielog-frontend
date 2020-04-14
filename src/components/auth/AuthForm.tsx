/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Input from '../common/Input';
import ButtonGroup from '../common/ButtonGroup';
import Button from '../common/Button';

type AuthFormProps = {
    type: "signin" | "signup";
}

const AuthForm = ({type}: AuthFormProps) => {

    return (
        <div css={style}>
            <div className="auth-title">{type}</div>
            <div>
                <form>
                    <Input />
                    <Input />
                    <Input />
                    <ButtonGroup direction="row" gap="">
                        <Button theme="violet">{type === "signin" ? "SIGN IN" : "SIGN UP"}</Button>
                    </ButtonGroup>
                </form>
            </div>
        </div>
    );
}

const style = css`

`;

export default AuthForm;