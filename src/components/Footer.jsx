const Footer = () => {
    return (
      <footer style={{
        backgroundColor: '#111',
        color: '#fff',
        padding: '1.5rem',
        textAlign: 'center',
        marginTop: '2rem',
      }}>
        <p>&copy; {new Date().getFullYear()} Necklesars. Todos os direitos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;
  