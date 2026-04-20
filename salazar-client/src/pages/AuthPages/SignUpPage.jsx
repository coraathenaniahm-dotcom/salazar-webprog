import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import potatobanana from "../../assets/potatobanana.jpg";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "confirmPassword" || name === "password") {
      setPasswordMatch(name === "password" ? value === formData.confirmPassword : formData.password === value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    // Navigate to sign in page
    navigate("/auth/signin");
  };

  return (
    <div style={{ width: "100%", height: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)", position: "fixed", top: 0, left: 0, overflow: "hidden", margin: 0, padding: "1.5rem", boxSizing: "border-box" }}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes bgShift {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(2deg); }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(236, 72, 153, 0.08)", filter: "blur(60px)", animation: "bgShift 8s ease-in-out infinite" }}></div>
      <div style={{ position: "absolute", bottom: "-5%", left: "-10%", width: "350px", height: "350px", borderRadius: "50%", background: "rgba(219, 39, 119, 0.06)", filter: "blur(50px)", animation: "bgShift 10s ease-in-out infinite reverse" }}></div>

      {/* Main Container */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "1.5rem", position: "relative", zIndex: 10, height: "100%", alignContent: "center" }}>
        
        {/* Left Side - Character & Welcome */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
          {/* Decorative Circle Background */}
          <div style={{ position: "absolute", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(236, 72, 153, 0.06)", filter: "blur(30px)", zIndex: 0 }}></div>
          
          {/* Character Image */}
          <img 
            src={potatobanana} 
            alt="Potatobanana" 
            style={{ 
              width: "220px", 
              height: "auto", 
              borderRadius: "2rem", 
              border: "4px solid rgba(236, 72, 153, 0.2)",
              boxShadow: "0 30px 60px rgba(236, 72, 153, 0.2), 0 0 0 2px rgba(236, 72, 153, 0.1)",
              animation: "float 4s ease-in-out infinite",
              position: "relative",
              zIndex: 2
            }} 
          />

          {/* Welcome Text */}
          <div style={{ textAlign: "center", marginTop: "2rem", position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#ec4899", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>
              Welcome to Fugglers!
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#cbd5e1", lineHeight: "1.6", maxWidth: "280px" }}>
              Join our fuzzy community and start your adorable adventure today
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem", position: "relative", zIndex: 2, width: "100%" }}>
            <div style={{ textAlign: "center", padding: "1rem", borderRadius: "1rem", background: "rgba(236, 72, 153, 0.08)", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#ec4899" }}>10K+</div>
              <div style={{ fontSize: "0.75rem", color: "#cbd5e1", marginTop: "0.25rem" }}>MEMBERS</div>
            </div>
            <div style={{ textAlign: "center", padding: "1rem", borderRadius: "1rem", background: "rgba(236, 72, 153, 0.08)", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#ec4899" }}>100+</div>
              <div style={{ fontSize: "0.75rem", color: "#cbd5e1", marginTop: "0.25rem" }}>COLLECTIONS</div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "0.5rem", animation: "slideIn 0.6s ease-out" }}>
          {/* Form Card */}
          <div style={{ background: "rgba(15, 23, 42, 0.85)", backdropFilter: "blur(20px)", borderRadius: "1.5rem", padding: "1.5rem", boxShadow: "0 25px 50px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
            
            {/* Form Header */}
            <div style={{ marginBottom: "0.6rem", marginTop: "0.3rem" }}>
              <h1 style={{ fontSize: "1.6rem", fontWeight: "900", color: "#ec4899", marginBottom: "0.1rem", letterSpacing: "-0.5px", marginTop: 0 }}>
                Create Account
              </h1>
              <p style={{ fontSize: "0.75rem", color: "#cbd5e1" }}>
                Join thousands of Fuggler enthusiasts
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {/* Name Fields */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div>
                  <label htmlFor="firstName" style={{ display: "block", fontSize: "0.7rem", fontWeight: "700", color: "#cbd5e1", marginBottom: "0.3rem", letterSpacing: "0.05em" }}>
                    FIRST NAME
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    autoComplete="given-name"
                    required
                    style={{ width: "100%", padding: "0.7rem 0.75rem", fontSize: "0.8rem", border: "2px solid rgba(236, 72, 153, 0.2)", borderRadius: "0.75rem", background: "rgba(236, 72, 153, 0.05)", color: "#e2e8f0", outline: "none", transition: "all 0.3s", boxSizing: "border-box" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ec4899";
                      e.target.style.boxShadow = "0 0 0 3px rgba(236, 72, 153, 0.2)";
                      e.target.style.background = "rgba(236, 72, 153, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(236, 72, 153, 0.2)";
                      e.target.style.boxShadow = "none";
                      e.target.style.background = "rgba(236, 72, 153, 0.05)";
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={{ display: "block", fontSize: "0.7rem", fontWeight: "700", color: "#cbd5e1", marginBottom: "0.3rem", letterSpacing: "0.05em" }}>
                    LAST NAME
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    autoComplete="family-name"
                    required
                    style={{ width: "100%", padding: "0.7rem 0.75rem", fontSize: "0.8rem", border: "2px solid rgba(236, 72, 153, 0.2)", borderRadius: "0.75rem", background: "rgba(236, 72, 153, 0.05)", color: "#e2e8f0", outline: "none", transition: "all 0.3s", boxSizing: "border-box" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ec4899";
                      e.target.style.boxShadow = "0 0 0 3px rgba(236, 72, 153, 0.2)";
                      e.target.style.background = "rgba(236, 72, 153, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(236, 72, 153, 0.2)";
                      e.target.style.boxShadow = "none";
                      e.target.style.background = "rgba(236, 72, 153, 0.05)";
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: "0.7rem", fontWeight: "700", color: "#cbd5e1", marginBottom: "0.3rem", letterSpacing: "0.05em" }}>
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  style={{ width: "100%", padding: "0.7rem 0.75rem", fontSize: "0.8rem", border: "2px solid rgba(236, 72, 153, 0.2)", borderRadius: "0.75rem", background: "rgba(236, 72, 153, 0.05)", color: "#e2e8f0", outline: "none", transition: "all 0.3s", boxSizing: "border-box" }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ec4899";
                    e.target.style.boxShadow = "0 0 0 3px rgba(236, 72, 153, 0.2)";
                    e.target.style.background = "rgba(236, 72, 153, 0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(236, 72, 153, 0.2)";
                    e.target.style.boxShadow = "none";
                    e.target.style.background = "rgba(236, 72, 153, 0.05)";
                  }}
                />
              </div>

              {/* Password Fields */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div>
                  <label htmlFor="password" style={{ display: "block", fontSize: "0.7rem", fontWeight: "700", color: "#cbd5e1", marginBottom: "0.3rem", letterSpacing: "0.05em" }}>
                    PASSWORD
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    required
                    style={{ width: "100%", padding: "0.7rem 0.75rem", fontSize: "0.8rem", border: "2px solid rgba(236, 72, 153, 0.2)", borderRadius: "0.75rem", background: "rgba(236, 72, 153, 0.05)", color: "#e2e8f0", outline: "none", transition: "all 0.3s", boxSizing: "border-box" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ec4899";
                      e.target.style.boxShadow = "0 0 0 3px rgba(236, 72, 153, 0.2)";
                      e.target.style.background = "rgba(236, 72, 153, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(236, 72, 153, 0.2)";
                      e.target.style.boxShadow = "none";
                      e.target.style.background = "rgba(236, 72, 153, 0.05)";
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" style={{ display: "block", fontSize: "0.7rem", fontWeight: "700", color: passwordMatch ? "#cbd5e1" : "#fc8181", marginBottom: "0.3rem", letterSpacing: "0.05em" }}>
                    CONFIRM
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    required
                    style={{ width: "100%", padding: "0.7rem 0.75rem", fontSize: "0.8rem", border: `2px solid ${passwordMatch ? "rgba(236, 72, 153, 0.2)" : "rgba(252, 165, 165, 0.4)"}`, borderRadius: "0.75rem", background: passwordMatch ? "rgba(236, 72, 153, 0.05)" : "rgba(127, 29, 29, 0.3)", color: "#e2e8f0", outline: "none", transition: "all 0.3s", boxSizing: "border-box" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ec4899";
                      e.target.style.boxShadow = "0 0 0 3px rgba(236, 72, 153, 0.2)";
                      e.target.style.background = "rgba(236, 72, 153, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = passwordMatch ? "rgba(236, 72, 153, 0.2)" : "rgba(252, 165, 165, 0.4)";
                      e.target.style.boxShadow = "none";
                      e.target.style.background = passwordMatch ? "rgba(236, 72, 153, 0.05)" : "rgba(127, 29, 29, 0.3)";
                    }}
                  />
                </div>
              </div>

              {passwordMatch === false && (
                <p style={{ fontSize: "0.65rem", color: "#fc8181", background: "rgba(127, 29, 29, 0.2)", padding: "0.4rem", borderRadius: "0.5rem", marginTop: "-0.2rem" }}>
                  ✓ Passwords must match
                </p>
              )}

              {/* Terms & Social in Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", alignItems: "center" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.65rem", color: "#cbd5e1", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    style={{ width: "1rem", height: "1rem", cursor: "pointer", accentColor: "#ec4899" }}
                  />
                  I agree to Terms
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <button
                    type="button"
                    style={{ padding: "0.55rem", fontSize: "0.6rem", fontWeight: "600", color: "#ec4899", background: "rgba(236, 72, 153, 0.1)", border: "2px solid rgba(236, 72, 153, 0.2)", borderRadius: "0.6rem", cursor: "pointer", transition: "all 0.3s", letterSpacing: "0.05em" }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(236, 72, 153, 0.15)";
                      e.target.style.borderColor = "#ec4899";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(236, 72, 153, 0.1)";
                      e.target.style.borderColor = "rgba(236, 72, 153, 0.2)";
                    }}
                  >
                  🔵 Google
                  </button>
                  <button
                    type="button"
                    style={{ padding: "0.55rem", fontSize: "0.6rem", fontWeight: "600", color: "#ec4899", background: "rgba(236, 72, 153, 0.1)", border: "2px solid rgba(236, 72, 153, 0.2)", borderRadius: "0.6rem", cursor: "pointer", transition: "all 0.3s", letterSpacing: "0.05em" }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(236, 72, 153, 0.2)";
                      e.target.style.borderColor = "#ec4899";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(236, 72, 153, 0.1)";
                      e.target.style.borderColor = "rgba(236, 72, 153, 0.2)";
                    }}
                  >
                  🍎 Apple
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{ width: "100%", padding: "0.85rem", fontSize: "0.75rem", fontWeight: "800", color: "white", background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)", border: "none", borderRadius: "0.75rem", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "0.3rem" }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = "0 15px 45px rgba(236, 72, 153, 0.4)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = "0 10px 30px rgba(236, 72, 153, 0.3)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Create My Account
              </button>
            </form>

            {/* Sign In Link */}
            <div style={{ textAlign: "center", marginTop: "0.8rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(236, 72, 153, 0.1)" }}>
              <span style={{ color: "#a1a5b7", fontSize: "0.65rem" }}>
                Already have an account?{" "}
                <Link
                  to="/auth/signin"
                  style={{ color: "#ec4899", fontWeight: "800", textDecoration: "none" }}
                >
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
