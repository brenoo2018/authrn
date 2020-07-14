/**
 * requisição fake simulando uma chamada api e recebendo os dados;
 */
export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'ahdjahkdjashdausdhaudhaudh',
        user: {
          name: 'breno',
          email: 'thaynanbreno@gmail.com',
        },
      });
    }, 2000);
  });
}
