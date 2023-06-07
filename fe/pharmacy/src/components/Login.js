import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import loginService from "../service/loginService";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {RotatingLines} from "react-loader-spinner";

export default function Login() {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showFormResetPass, setShowFormResetPass] = useState(false);
    const [showFormEmail, setShowFormEmail] = useState(false);
    const [mail, setMail] = useState("");
    const [submit, setSubmit] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Đăng Nhập";
    }, []);

    const handleShowFromEmail = () => {
        setShowFormEmail(true);
    };

    const handleHideEmail = () => {
        setShowFormEmail(false);
    };

    const handleHideOtp = () => {
        setShowOtpModal(false);
    };

    const handleHideResetPass = () => {
        setShowFormResetPass(false);
    };

    const handleAgainSendCode = async () => {
        setSubmit(true);
        try {
            await loginService.forgotPassword({email: mail});
            setSubmit(false);
            setCountdown(60);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown((countdown) => countdown - 1);
        }, 1000);
        if (countdown === 0) {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [countdown]);
    return (
        <>
            <div className="wrapper"  style={
                showFormEmail || showOtpModal || showFormResetPass
                    ? { opacity: "70%" }
                    : {}
            }>
                <div className="login">
                    <img className="site-icon " src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270-2.png"
                         style={{marginLeft: "283%"}}/>
                    <div className="d1 step1">
                        <span>Đăng nhập</span>
                        <Formik initialValues={{
                            username: "",
                            password: "",
                        }}
                                validationSchema={Yup.object({
                                    password: Yup.string()
                                        .required("Trường này bắt buộc nhập")
                                        .min(5, "Tên phải chứa ít nhất 5 ký tự")
                                        .max(20, "Tên không được vượt quá 20 ký tự"),
                                    username: Yup.string()
                                        .required("Trường này bắt buộc nhập")
                                        .matches(
                                            "^[a-zA-Z0-9]*$",
                                            "Tên đăng nhập không được chứa ký tự đặc biệt"
                                        )
                                        .min(5, "Tên phải chứa ít nhất 5 ký tự")
                                        .max(20, "Tên không được vượt quá 20 ký tự"),
                                })}
                                onSubmit={(value) => {
                                    const login = async () => {
                                        try {
                                            const rs = await loginService.login(value);
                                            localStorage.setItem("token", rs.data.token);
                                            localStorage.setItem("name", rs.data.name);
                                            localStorage.setItem("email", rs.data.email);
                                            localStorage.setItem(
                                                "roles",
                                                rs.data.roles[0].authority
                                            );
                                            localStorage.setItem("username", rs.data.userName);
                                            Swal.fire({
                                                icon: "success",
                                                title: "Đăng nhập thành công",
                                                showConfirmButton: false,
                                                timer: 1500,
                                            });
                                            document.getElementById("usernameError").innerText =
                                                "";
                                            document.getElementById("passwordError").innerText =
                                                "";
                                            navigate("/");
                                        } catch (error) {
                                            console.warn(error);
                                            const err = error.response?.data;
                                            if (
                                                err?.message === "Tên người dùng không tồn tại"
                                            ) {
                                                document.getElementById(
                                                    "usernameError"
                                                ).innerText = "Tên người dùng không tồn tại";
                                            }
                                            if (err === "" || err.status === 403) {
                                                document.getElementById(
                                                    "passwordError"
                                                ).innerText = "Mật khẩu không chính xác";
                                            }
                                        }
                                    };
                                    login();
                                }}>


                            <Form id="frmGetVerifyCode">
                                <div className="input-area">
                <span className="iconoh-phone-blue input-icon" style={{marginTop: "-5px"}}>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
                     <path
                         d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z"
                         stroke="#757575" strokeWidth="1.5" strokeMiterlimit={10}/>
                     </svg>
                 </span>
                                    <Field type="text" name="username" id="username" placeholder="Tài khoản của bạn"/>
                                </div>
                                    <ErrorMessage name="username" component="div" className="text-danger"/>
                                <div>
                                    <span className="text-danger " id="usernameError"></span>
                                </div>
                                <div className="input-area">
          <span className="iconpa-phone-blue input-icon">
            <svg width={16} height={18} viewBox="0 0 16 18" fill="none">
              <path
                  d="M11.7239 6.83548V5.04464C11.698 2.94548 9.97471 1.26548 7.87638 1.29131C5.82055 1.31714 4.15805 2.97214 4.12305 5.02798V6.83548"
                  stroke="#8894A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.92448 10.7969V12.6477" stroke="#8894A7" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M7.92435 6.35352C3.13685 6.35352 1.54102 7.66018 1.54102 11.5793C1.54102 15.4993 3.13685 16.806 7.92435 16.806C12.7118 16.806 14.3085 15.4993 14.3085 11.5793C14.3085 7.66018 12.7118 6.35352 7.92435 6.35352Z"
                    stroke="#8894A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
                                    <Field type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Mật khẩu"/>
                                    {showPassword ? (
                                        <i type="button" onClick={() => {setShowPassword(!showPassword);}} className="bi bi-eye-slash-fill position-absolute top-50 translate-middle-y me-2 end-0"></i>
                                    ) : (
                                        <i type="button" onClick={() => {setShowPassword(!showPassword);}} className="bi bi-eye-fill position-absolute top-50 translate-middle-y me-2 end-0"></i>
                                    )}

                                </div>
                                <ErrorMessage name="password" component="div" className="text-danger"/>
                                <div>
                                    <span className="text-danger" id="passwordError"></span>
                                </div>
                                <div className="LoginForm_text-forget-password__TfqIV"
                                     style={{marginLeft: 183, marginBottom: 6}}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-lock" width={24} height={24}
                                         viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path
                                            d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"/>
                                        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/>
                                        <path d="M8 11v-4a4 4 0 1 1 8 0v4"/>
                                    </svg>
                                    <a  href="#"
                                       onClick={handleShowFromEmail} className="link-primary">Quên mật khẩu?</a>
                                </div>
                                <button type="submit" className="btn">
                                    Đăng nhập
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Chưa có tài khoản?{" "}
                                    <Link to={"/register"} className="link-primary">
                                        Đăng ký ngay
                                    </Link>
                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            {showFormEmail && (
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    onSubmit={(value, { setSubmitting }) => {
                        const sendEmail = async () => {
                            try {
                                const res = await loginService.forgotPassword(value);
                                setMail(res.data);
                                setShowFormEmail(false);
                                setShowOtpModal(true);
                                setSubmitting(false);
                                setCountdown(60);
                            } catch (error) {
                                setSubmitting(false);
                                if (error.response.data.email === "Không được để trống") {
                                    document.getElementById("emailErr").innerHTML =
                                        "Không được để trống";
                                } else if (
                                    error.response.data.email ===
                                    "Vui lòng nhập đúng định dạng Email VD: abc123@codegym.com"
                                ) {
                                    document.getElementById("emailErr").innerHTML =
                                        "Vui lòng nhập đúng định dạng Email VD: abc123@codegym.com";
                                } else if (
                                    error.response.data.message === "Không tìm thấy email"
                                ) {
                                    document.getElementById("emailErr").innerHTML =
                                        "Email xác nhận không chính xác";
                                } else {
                                    document.getElementById("emailErr").innerHTML = "";
                                }
                            }
                        };
                        sendEmail();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="modal d-block" id="exampleModal" tabIndex={-1}>
                                <div className="modal-dialog">
                                    <div className="modal-content" style={{ marginTop: 270 }}>
                                        <div className="modal-header">
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={handleHideEmail}
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">
                                            <div>
                                                <label htmlFor="email" className="form-label fw-bold">
                                                    Xác Nhận Email:
                                                </label>
                                            </div>
                                            <div>
                                                <Field
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Nhập Email xác nhận..."
                                                />
                                            </div>
                                            <div>
                                                <span className="text-danger" id="emailErr"></span>
                                            </div>
                                            <div>
                                                <span className="text-danger" id="emailErr"></span>
                                            </div>
                                        </div>
                                        {isSubmitting ? (
                                            <div className="d-flex justify-content-end me-3 pb-2">
                                                <RotatingLines
                                                    strokeColor="grey"
                                                    strokeWidth="5"
                                                    animationDuration="0.75"
                                                    width="30"
                                                    visible={true}
                                                />
                                            </div>
                                        ) : (
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    onClick={handleHideEmail}
                                                >
                                                    Hủy
                                                </button>
                                                <button type="submit" className="btn btn-primary">
                                                    Xác nhận
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}

            {showOtpModal && (
                <Formik
                    initialValues={{
                        code: "",
                        email: mail,
                    }}
                    onSubmit={(value) => {
                        const sendOtp = async () => {
                            try {
                                await loginService.checkOtp(value);
                                setShowOtpModal(false);
                                setShowFormResetPass(true);
                            } catch (error) {
                                console.log(error);
                                if (error.response.data.message === "Mã OTP không chính xác") {
                                    document.getElementById("codeErr").innerHTML =
                                        "Mã OTP không chính xác hoặc đã hết hạn";
                                } else if (error.response.data.code === "Không được để trống") {
                                    document.getElementById("codeErr").innerHTML =
                                        "Không được để trống";
                                } else if (
                                    error.response.data.code ===
                                    "Vui lòng nhập đúng định dạng OTP VD:XXXXXX (X là chữ số)"
                                ) {
                                    document.getElementById("codeErr").innerHTML =
                                        "Vui lòng nhập đúng định dạng OTP VD:XXXXXX (X là chữ số)";
                                } else {
                                    document.getElementById("codeErr").innerHTML = "";
                                }
                            }
                        };
                        sendOtp();
                    }}
                >
                    <Form>
                        <div className="modal d-block" tabIndex={-1}>
                            <div className="modal-dialog">
                                <div
                                    className="modal-content"
                                    style={{
                                        marginTop: 170,
                                    }}
                                >
                                    <div className="modal-header">
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={handleHideOtp}
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <label htmlFor="code" className="form-label fw-bold">
                                                Xác Nhận Mã OTP:
                                            </label>
                                        </div>
                                        <div>
                                            <Field
                                                className="form-control"
                                                name="code"
                                                placeholder="Nhập mã OTP....."
                                            />
                                        </div>
                                        {submit ? (
                                            <div className="mt-2 d-flex justify-content-end">
                                                <RotatingLines
                                                    strokeColor="grey"
                                                    strokeWidth="5"
                                                    animationDuration="0.75"
                                                    width="30"
                                                    visible={true}
                                                />
                                            </div>
                                        ) : (
                                            <div className="mt-2">
                                                <span className="text-danger" id="codeErr"></span>
                                                {countdown === 0 ? (
                                                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                                                    <div className="mt-2">

                                                        <a
                                                            className="float-end text-black text-decoration-none  bg-forgot-password"
                                                            onClick={handleAgainSendCode}
                                                        >
                                                            Gửi lại mã
                                                        </a>
                                                    </div>
                                                ) : (
                                                    <div className="mt-2">
                            <span className="float-end text-muted">
                              {" "}
                                ({countdown}) Gửi lại mã
                            </span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={handleHideOtp}
                                        >
                                            Hủy
                                        </button>
                                        <button type="submit" className="btn btn-primary">
                                            Xác nhận
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            )}
            {showFormResetPass && (
                <Formik
                    initialValues={{
                        newPassword: "",
                        confirmPassword: "",
                        email: mail,
                    }}
                    onSubmit={(value) => {
                        const resetPassword = async () => {
                            try {
                                await loginService.resetPassword(value);
                                setShowFormResetPass(false);
                                Swal.fire({
                                    icon: "success",
                                    title: "Thay đổi mật khẩu thành công",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            } catch (error) {
                                const err = error.response.data;
                                if (err.newPassword === "Không được bỏ trống") {
                                    document.getElementById("newPasswordErr").innerHTML =
                                        "Không được bỏ trống";
                                } else if (
                                    err.newPassword ===
                                    "Mật khẩu ít nhất 5 ký tự và nhiều nhất 20 ký tự"
                                ) {
                                    document.getElementById("newPasswordErr").innerHTML =
                                        "Mật khẩu ít nhất 5 ký tự và nhiều nhất 20 ký tự";
                                } else {
                                    document.getElementById("newPasswordErr").innerHTML = "";
                                }
                                if (err.message === "Mật khẩu xác nhận không trùng khớp") {
                                    document.getElementById("confirmPasswordErr").innerHTML =
                                        "Mật khẩu xác nhận không trùng khớp";
                                } else if (err.confirmPassword === "Không được bỏ trống") {
                                    document.getElementById("confirmPasswordErr").innerHTML =
                                        "Không được bỏ trống";
                                } else if (
                                    err.confirmPassword ===
                                    "Mật khẩu ít nhất 5 ký tự và nhiều nhất 20 ký tự"
                                ) {
                                    document.getElementById("confirmPasswordErr").innerHTML =
                                        "Mật khẩu ít nhất 5 ký tự và nhiều nhất 20 ký tự";
                                } else {
                                    document.getElementById("confirmPasswordErr").innerHTML = "";
                                }
                            }
                        };
                        resetPassword();
                    }}
                >
                    <Form>
                        <div className="modal d-block" tabIndex={-1}>
                            <div className="modal-dialog">
                                <div
                                    className="modal-content"
                                    style={{
                                        marginTop: 270,
                                    }}
                                >
                                    <div className="modal-header">
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={handleHideResetPass}
                                            aria-label="Close"
                                        />
                                    </div>

                                    <div className="modal-body">
                                        <div className="mt-2">
                                            <label
                                                htmlFor="newPassword"
                                                className="fw-bold form-label"
                                            >
                                                Mật khẩu mới:
                                            </label>
                                        </div>
                                        <div className="position-relative">
                                            <Field
                                                type={showNewPassword ? "text" : "password"}
                                                id="newPassword"
                                                className="form-control"
                                                name="newPassword"
                                                placeholder="Nhập mật khẩu mới"
                                            />
                                            {showNewPassword ? (
                                                <i
                                                    type="button"
                                                    onClick={() => {
                                                        setShowNewPassword(!showNewPassword);
                                                    }}
                                                    className={`bi bi-eye-slash-fill me-2 position-absolute top-50 translate-middle-y end-0`}
                                                ></i>
                                            ) : (
                                                <i
                                                    type="button"
                                                    onClick={() => {
                                                        setShowNewPassword(!showNewPassword);
                                                    }}
                                                    className={`bi bi-eye-fill me-2 position-absolute top-50 translate-middle-y end-0`}
                                                ></i>
                                            )}
                                        </div>
                                        <span className="text-danger" id="newPasswordErr"></span>
                                        <div>
                                            <span className="text-danger" id="newPasswordErr"></span>
                                        </div>
                                        <div className="mt-2">
                                            <label
                                                htmlFor="confirmPassword"
                                                className="fw-bold form-label"
                                            >
                                                Xác nhận mật khẩu:
                                            </label>
                                        </div>
                                        <div className="position-relative">
                                            <Field
                                                type={showConfirmPassword ? "text" : "password"}
                                                id="confirmPassword"
                                                className="form-control"
                                                name="confirmPassword"
                                                placeholder="Xác nhận mật khẩu mới"
                                            />
                                            {showConfirmPassword ? (
                                                <i
                                                    type="button"
                                                    onClick={() => {
                                                        setShowConfirmPassword(!showConfirmPassword);
                                                    }}
                                                    className={`bi bi-eye-slash-fill me-2 position-absolute top-50 translate-middle-y end-0`}
                                                ></i>
                                            ) : (
                                                <i
                                                    type="button"
                                                    onClick={() => {
                                                        setShowConfirmPassword(!showConfirmPassword);
                                                    }}
                                                    className={`bi bi-eye-fill me-2 position-absolute top-50 translate-middle-y end-0`}
                                                ></i>
                                            )}
                                        </div>
                                        <div>
                      <span
                          className="text-danger"
                          id="confirmPasswordErr"
                      ></span>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={handleHideResetPass}
                                            >
                                                Hủy
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Xác nhận
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            )}

        </>

    )
}