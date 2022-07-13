function service() {
    const getPdf = () => {
      return fetch(
        "http://localhost:8080/downloadPDF",
        {
          method: "POST",
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/pdf' },
        }
      )
        .then((res) => res.json())
        .then((data) => data.pdf)
        .catch((e) => e);
    };
  
    return {
      getPdf,
    };
  }
  
  const pdfService = service();
  
  export default pdfService;
  