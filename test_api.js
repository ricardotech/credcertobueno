async function test() {
  const params = new URLSearchParams();
  params.append('usuario', 'CDBU');
  params.append('senha', 'iUrT15gwY1JUI29Q');

  const res = await fetch('https://jcf.promosysweb.com/services/token.php', {
    method: 'POST',
    body: params
  });
  const data = await res.json();
  console.log('Token response:', data);
  
  if (data.Token) {
     const credParams = new URLSearchParams();
     credParams.append('token', data.Token);
     const credRes = await fetch('https://jcf.promosysweb.com/services/creditos.php', {
       method: 'POST',
       body: credParams
     });
     console.log('Creditos:', await credRes.json());
  }
}

test();
