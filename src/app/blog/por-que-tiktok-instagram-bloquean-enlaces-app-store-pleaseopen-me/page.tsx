import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  APP_STORE_LINK_POST_ALTERNATES,
  formatPostDate,
  getPost,
} from "@/lib/blog/posts";

const SLUG = "por-que-tiktok-instagram-bloquean-enlaces-app-store-pleaseopen-me";

export const metadata: Metadata = {
  title:
    "Por qué TikTok e Instagram bloquean los enlaces de App Store – y cómo solucionarlo con pleaseopen.me",
  description:
    "TikTok e Instagram bloquean los enlaces de App Store y Play Store en sus In-App Browser. Descubre por qué ocurre y cómo configurar un único enlace para tu app con pleaseopen.me.",
  alternates: {
    canonical: `https://eighteen1.com/blog/${SLUG}`,
    languages: {
      en: `https://eighteen1.com${APP_STORE_LINK_POST_ALTERNATES.en}`,
      de: `https://eighteen1.com${APP_STORE_LINK_POST_ALTERNATES.de}`,
      ko: `https://eighteen1.com${APP_STORE_LINK_POST_ALTERNATES.ko}`,
      es: `https://eighteen1.com${APP_STORE_LINK_POST_ALTERNATES.es}`,
    },
  },
  openGraph: {
    title:
      "Por qué TikTok e Instagram bloquean los enlaces de App Store – y cómo solucionarlo con pleaseopen.me",
    description:
      "TikTok e Instagram bloquean los enlaces de App Store y Play Store en sus In-App Browser. Descubre por qué ocurre y cómo solucionar el problema con pleaseopen.me.",
    type: "article",
    url: `https://eighteen1.com/blog/${SLUG}`,
    publishedTime: "2026-09-20",
    locale: "es_ES",
  },
};

export default function TikTokInstagramBlockingEsPage() {
  const post = getPost(SLUG);
  if (!post) notFound();

  return (
    <article className="px-6 py-24" lang="es">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          &larr; Blog
        </Link>

        <header className="mt-8 border-b border-border pb-10">
          <time
            dateTime={post.date}
            className="text-xs font-medium uppercase tracking-wider text-muted"
          >
            {formatPostDate(post.date, "es-ES")}
          </time>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
          <LanguageSwitcher current="es" label="También disponible en" />
        </header>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Si tienes un enlace de App Store en tu Bio de TikTok o Instagram y
            los visitantes de repente ya no llegan a App Store, aunque en
            realidad tu enlace sea correcto, no eres el único al que le ocurre.
          </p>
          <p>
            TikTok e Instagram abren los enlaces dentro de sus propios In-App
            Browser. Especialmente los enlaces a App Store o Google Play pueden
            bloquearse o no redirigirse correctamente en este entorno. Para los
            desarrolladores y App Marketers, esto puede ser un problema
            invisible: el usuario hace clic en el enlace, pero nunca llega a la
            página de la Store.
          </p>
          <p>
            Nos encontramos exactamente con este problema al promocionar
            nuestras propias apps y por eso desarrollamos{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>
            . El servicio permite utilizar un único enlace que dirige de forma
            fiable a los visitantes procedentes de redes sociales a la App Store
            correcta y, cuando es necesario, también explica cómo salir de los
            In-App Browser de TikTok o Meta.
          </p>

          <figure className="my-10">
            <Image
              src="/images/blog/fail_screen.png"
              alt='Mensaje de error "Action can&apos;t be completed" de TikTok después de abrir un enlace de App Store en el In-App Browser'
              width={1200}
              height={800}
              className="w-full rounded-2xl border border-border"
            />
            <figcaption className="mt-3 text-center text-xs text-muted">
              Bio link sin pleaseopen.me — error &ldquo;Action can&apos;t be
              completed&rdquo; de TikTok en el In-App Browser
            </figcaption>
          </figure>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            &ldquo;Action can&apos;t be completed&rdquo; – ¿qué está pasando
            realmente?
          </h2>
          <p>
            Si después de hacer clic en un enlace dentro de TikTok aparece el
            mensaje{" "}
            <strong className="font-semibold text-foreground">
              &ldquo;Action can&apos;t be completed&rdquo;
            </strong>
            , normalmente el problema no está en tu enlace de App Store.
          </p>
          <p>
            TikTok utiliza su propio In-App Browser. Este Browser puede no ser
            capaz de transferir el enlace a Safari o Chrome, ni de abrir
            directamente la página de App Store. Para el visitante, esto crea un
            callejón sin salida y muchos usuarios simplemente abandonan en este
            punto.
          </p>
          <p>
            Por tanto, el problema no está necesariamente en tu enlace ni en tu
            página de Bio-Link. La limitación se produce dentro del Browser de
            la correspondiente Social-Media-App.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            ¿Por qué TikTok bloquea los enlaces de App Store?
          </h2>
          <p>
            El In-App Browser de TikTok está diseñado para mantener a los
            usuarios dentro de la aplicación de TikTok en la medida de lo
            posible. Las URL de App Store y Google Play pueden ser destinos
            problemáticos dentro de este sistema.
          </p>
          <p>
            Por eso, un Redirect automático no siempre funciona de forma
            fiable. En determinados casos, el usuario debe salir primero del
            In-App Browser, por ejemplo, abriendo la página en su Browser
            normal.
          </p>
          <p>
            Aquí es precisamente donde puede ayudar una indicación breve y
            visible: en lugar de dejar al usuario solo ante un mensaje de error,
            la página puede explicar qué debe hacer y después redirigirlo
            automáticamente a la App Store correcta.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            ¿Por qué Instagram y Facebook bloquean los enlaces de App Store?
          </h2>
          <p>
            Instagram y Facebook también utilizan sus propios In-App Browser. Su
            comportamiento puede ser diferente y también puede cambiar con el
            tiempo.
          </p>
          <p>
            En algunos casos, una redirección automática funciona desde el
            In-App Browser. En otros, el usuario primero debe abrir la página en
            Safari o Chrome.
          </p>
          <p>
            Esto significa que un enlace que funciona perfectamente hoy puede
            comportarse de repente de otra manera dependiendo de la plataforma,
            el Browser y sus reglas actuales.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            El problema no está en tu Bio-Link-Tool
          </h2>
          <p>
            Cuando un enlace de App Store no funciona, lo primero que suele
            venir a la mente es cambiar el servicio de Bio-Link que utilizas:
            pasar de Linktree a Beacons, de Beacons a una Landingpage propia o
            algo similar.
          </p>
          <p>
            Sin embargo, esto no necesariamente resuelve el problema real.
          </p>
          <p>
            Si tu página de Bio-Link se carga correctamente, pero el{" "}
            <strong className="font-semibold text-foreground">
              App Store-Button dentro de esa página
            </strong>{" "}
            no funciona, la limitación sigue estando en el In-App Browser. El
            usuario puede llegar a tu página, pero desde allí es posible que no
            pueda ser redirigido directamente a App Store.
          </p>
          <p>
            Por eso necesitas una solución que tenga en cuenta específicamente
            este paso.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Cómo resuelve pleaseopen.me este problema
          </h2>
          <p>
            <strong className="font-semibold text-foreground">
              pleaseopen.me
            </strong>{" "}
            se desarrolló precisamente para este caso de uso: un único enlace
            para tu app que lleva a los visitantes al destino correcto,
            independientemente de si utilizan iOS o Android y de dónde procedan.
          </p>
          <p>El enlace puede:</p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Redirigir automáticamente, cuando sea posible, a los visitantes de
              Instagram y Facebook a la App Store correcta.
            </li>
            <li>
              Mostrar a los visitantes de TikTok, cuando sea necesario, una
              breve indicación de &ldquo;Open in browser&rdquo; antes de
              realizar la redirección.
            </li>
            <li>
              Detectar el dispositivo del visitante y enviar a los usuarios de
              iOS a App Store y a los de Android a Google Play.
            </li>
            <li>
              Gestionar ambos enlaces de Store mediante{" "}
              <strong className="font-semibold text-foreground">
                un único enlace
              </strong>
              , por lo que no necesitas enlaces separados para iOS y Android en
              tu Bio.
            </li>
          </ol>
          <p>
            Por ejemplo, puedes utilizar un enlace como:{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 text-sm text-foreground">
              pleaseopen.me/deineapp
            </code>
          </p>
          <p>Para el usuario solo hay un único enlace visible.</p>
          <p>
            Nosotros también utilizamos pleaseopen.me para nuestras propias
            apps. Entre otras, lo utilizamos para{" "}
            <a
              href="https://bydeapp.de"
              className="font-medium text-accent hover:underline"
            >
              Byde
            </a>
            , nuestra Smart-Closet-App para hombres. Especialmente en el caso de
            apps cuyos usuarios llegan desde TikTok o Instagram, resulta útil
            que un clic en la Bio no termine bloqueado por un In-App Browser.
          </p>

          <figure className="my-10">
            <Image
              src="/images/blog/solution_spanish.PNG"
              alt="Página de ejemplo de pleaseopen.me con indicación de TikTok-/Meta-Escape y posterior redirección a App Store"
              width={800}
              height={1600}
              className="mx-auto w-full max-w-sm rounded-2xl border border-border"
            />
            <figcaption className="mt-3 text-center text-xs text-muted">
              Bio link con pleaseopen.me — indicación de escape y redirección a
              App Store
            </figcaption>
          </figure>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Mucho más que un simple App-Store-Redirect
          </h2>
          <p>
            El App-Store-Redirect es el núcleo de pleaseopen.me, pero el
            servicio también puede asumir otras funciones relacionadas con tu
            app:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="font-semibold text-foreground">
                Crear y alojar una política de privacidad de forma gratuita.
              </strong>{" "}
              App Store Connect y Google Play requieren una política de
              privacidad accesible. pleaseopen.me solicita la información
              relevante sobre tu app y crea una política adecuada en{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-sm text-foreground">
                pleaseopen.me/deineapp/privacy
              </code>
              .
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Hosting gratuito de ads.txt y app-ads.txt.
              </strong>{" "}
              Si monetizas tu app con AdMob, AppLovin, Meta u otra red
              publicitaria, puedes proporcionar tu archivo ads.txt a través de
              pleaseopen.me sin tener que crear primero tu propio Website.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Páginas &ldquo;Coming soon&rdquo; para plataformas que aún no
                están disponibles.
              </strong>{" "}
              Si tu app ya está disponible en iOS pero todavía no has publicado
              la versión para Android, puedes mostrar a los visitantes una
              página Coming-Soon adecuada.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Multi-button pages al estilo Linktree.
              </strong>{" "}
              Si no solo necesitas un Store-Redirect, también puedes utilizar
              pleaseopen.me como una página completa de Bio-Link.
            </li>
          </ul>
          <p>
            Las funciones básicas, como el Redirect, el Hosting de la política
            de privacidad y el Hosting de ads.txt, son gratuitas. Las funciones
            avanzadas, como Custom Domains y la posibilidad de gestionar varias
            apps en una sola cuenta, forman parte del área de pago.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Cómo configurar tu App-Link con pleaseopen.me
          </h2>
          <p>La configuración solo lleva unos minutos:</p>

          <h3 className="pt-2 text-xl font-bold text-foreground">
            1. Visita pleaseopen.me
          </h3>
          <p>
            Abre{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>
            .
          </p>

          <h3 className="pt-2 text-xl font-bold text-foreground">
            2. Haz clic en &ldquo;Get Started&rdquo;
          </h3>
          <p>
            Inicia la configuración mediante{" "}
            <strong className="font-semibold text-foreground">
              &ldquo;Get Started&rdquo;
            </strong>
            .
          </p>

          <h3 className="pt-2 text-xl font-bold text-foreground">
            3. Elige el Slug que quieras y un método de inicio de sesión
          </h3>
          <p>
            Elige el{" "}
            <strong className="font-semibold text-foreground">Slug</strong> que
            quieras utilizar para tu enlace y, a continuación, un método de
            inicio de sesión. Tu enlace tendrá, por ejemplo, este aspecto:{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 text-sm text-foreground">
              pleaseopen.me/myapp
            </code>
          </p>

          <h3 className="pt-2 text-xl font-bold text-foreground">
            4. Elige &ldquo;Single Redirect&rdquo; o &ldquo;Multi button
            page&rdquo;
          </h3>
          <p>
            Selecciona{" "}
            <strong className="font-semibold text-foreground">
              &ldquo;Single Redirect&rdquo;
            </strong>{" "}
            si quieres que tu enlace lleve directamente a la App Store
            correspondiente. Si, en cambio, quieres una página similar a
            Linktree con varios Buttons, selecciona{" "}
            <strong className="font-semibold text-foreground">
              &ldquo;Multi button page&rdquo;
            </strong>
            .
          </p>

          <h3 className="pt-2 text-xl font-bold text-foreground">
            5. Añade tus enlaces de App Store
          </h3>
          <p>
            Añade tus enlaces a{" "}
            <strong className="font-semibold text-foreground">App Store</strong>{" "}
            y/o{" "}
            <strong className="font-semibold text-foreground">
              Google Play
            </strong>
            . pleaseopen.me detecta el dispositivo del visitante y envía a los
            usuarios de iOS a App Store y a los de Android a Google Play.
          </p>

          <h3 className="pt-2 text-xl font-bold text-foreground">
            6. Activa o desactiva el &ldquo;TikTok/Meta escape tutorial&rdquo;
          </h3>
          <p>
            Puedes activar o desactivar el{" "}
            <strong className="font-semibold text-foreground">
              &ldquo;TikTok/Meta escape tutorial&rdquo;
            </strong>
            . Si lo activas, también puedes adaptar las indicaciones al idioma y
            al diseño de tu app.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Si tus enlaces de App Store no funcionan
          </h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Abre el enlace directamente{" "}
              <strong className="font-semibold text-foreground">
                dentro de TikTok e Instagram
              </strong>
              , no solo en Safari o Chrome.
            </li>
            <li>
              Si utilizas Linktree, Beacons o tu propio Website, comprueba
              también si funciona el{" "}
              <strong className="font-semibold text-foreground">
                Store-Button de esa página
              </strong>
              .
            </li>
            <li>
              Si todavía no tienes tu propio Developer-Website, ten también en
              cuenta requisitos como una política de privacidad y ads.txt.
            </li>
          </ul>
          <p>
            Si quieres configurar un único enlace para tu app, puedes empezar
            gratis con{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>
            .
          </p>
        </div>

        <aside className="mt-14 border-t border-border pt-10">
          <h2 className="text-xl font-bold text-foreground">
            Artículos relacionados
          </h2>
          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href="/blog/we-built-pleaseopen-me"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  We built pleaseopen.me – a free fix for App Store links
                  blocked on TikTok and Instagram
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/privacy-policy-generation-pleaseopen-me"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  We added privacy policy generation + hosting to pleaseopen.me
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/os-specific-landing-pages-pleaseopen-me"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  OS-specific landing pages on pleaseopen.me
                </span>
              </Link>
            </li>
            <li>
              <a
                href="https://www.pleaseopen.me/blog/appstore-links-broken-tiktok-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  pleaseopen.me
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  App Store links failing on TikTok and Instagram
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://bydeapp.de"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  Byde – Smart Closet for Men on iOS
                </span>
              </a>
            </li>
          </ul>
        </aside>

        <footer className="mt-14 flex flex-wrap items-center gap-4 border-t border-border pt-8">
          <Link
            href="/projects"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Ver proyectos
          </Link>
          <a
            href="https://pleaseopen.me/claim"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Create your free link →
          </a>
        </footer>
      </div>
    </article>
  );
}
