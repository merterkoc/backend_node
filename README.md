# backend_node
## Swagger login and authentication
### How to use
1. Clone the repository
2. Install dependencies
3. Run the server
4. Go to http://localhost:3000/api-docs
5. Login with the default user
6. Copy the token "123456"
7. Click on the Authorize button
8. Paste the token
9. Click on the Authorize button
10. Click on the green Try it out button
11. Click on the Execute button
12. Enjoy




TypeScript ile Node.js uygulamanızı çalıştırmak için birkaç ek adım gereklidir. TypeScript, JavaScript'in bir üst kümesi olduğu için önce TypeScript kodunuzu JavaScript'e dönüştürmeniz (derlemeniz) gerekir. İşte adım adım rehber:

Node.js ve npm Yükleyin: Eğer henüz yüklü değilse, Node.js ve npm'i Node.js'in resmi web sitesinden indirip yükleyin.

TypeScript Yükleyin: TypeScript'i global olarak yüklemek için şu komutu çalıştırın:

bash
Copy code
npm install -g typescript
TypeScript Projesi Oluşturun: Projenizin kök dizininde tsconfig.json dosyasını oluşturun. Bu dosya, TypeScript derleyicisinin nasıl davranacağını tanımlar. Basit bir tsconfig.json dosyası şu şekilde görünebilir:

json
Copy code
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
Proje Dizini Yapısı: Projenizde src adında bir dizin oluşturun ve TypeScript dosyalarınızı (.ts uzantılı) bu dizine koyun. Örneğin, src/app.ts.

Bağımlılıkları Yükleyin: Gerekli bağımlılıkları yüklemek için npm init -y komutu ile bir package.json dosyası oluşturun ve ardından projeye özgü bağımlılıkları yükleyin. Örneğin, Express kullanıyorsanız:

bash
Copy code
npm install express
npm install @types/express --save-dev
TypeScript Kodunu Yazın: Örneğin, src/app.ts dosyanız şu şekilde olabilir:

typescript
Copy code
import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
TypeScript Kodunu JavaScript'e Derleyin: Terminalde şu komutu çalıştırarak TypeScript kodunu JavaScript'e dönüştürün:

bash
Copy code
tsc
Uygulamayı Çalıştırın: Derlenen JavaScript dosyalarını dist dizininde bulabilirsiniz. Uygulamanızı çalıştırmak için şu komutu kullanın:

bash
Copy code
node dist/app.js
NPM Komutlarını Özelleştirin (Opsiyonel): package.json dosyanıza scriptler ekleyerek derleme ve çalıştırma süreçlerini kolaylaştırabilirsiniz:

json
Copy code
{
  "name": "your-app-name",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node dist/app.js"
  },
  "devDependencies": {
    "typescript": "^4.0.0",
    "@types/node": "^14.0.0"
  }
}
Şimdi şu komutlarla projeyi derleyip çalıştırabilirsiniz:

bash
Copy code
npm run build
npm start
Özet
Node.js ve npm yükleyin.
TypeScript'i global olarak yükleyin.
tsconfig.json dosyasını oluşturun.
src dizininde TypeScript dosyalarınızı yazın.
Bağımlılıkları yükleyin.
TypeScript kodunu derleyin (tsc).
JavaScript dosyasını Node.js ile çalıştırın.
Bu adımları takip ederek TypeScript ile Node.js uygulamanızı başarılı bir şekilde çalıştırabilirsiniz.
