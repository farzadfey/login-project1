document.getElementById('language').addEventListener('change', function() {
  const language = this.value;
  if (language === 'en') {
    document.querySelector('h2').textContent = 'Login';
    document.querySelector('button').textContent = 'Login';
    document.querySelector('a').textContent = 'Forgot your password?';
  } else if (language === 'fa') {
    document.querySelector('h2').textContent = 'ورود';
    document.querySelector('button').textContent = 'ورود';
    document.querySelector('a').textContent = 'فراموشی رمز عبور؟';
  } else if (language === 'zh') {
    document.querySelector('h2').textContent = '登录';
    document.querySelector('button').textContent = '登录';
    document.querySelector('a').textContent = '忘记密码?';
  }
});
