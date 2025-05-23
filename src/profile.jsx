import React, { useState } from "react";
// import "./ProfilePage.css";
import { MapPin, Briefcase, Sun, Moon } from "lucide-react";

const ProfilePage = () => {
  // 优先使用 localStorage 中保存的主题设置，如果没有则使用系统主题
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 监听系统主题变化
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // 只有当用户没有手动设置主题时，才跟随系统主题
      if (localStorage.getItem("theme") === null) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // 初始化主题
    document.documentElement.classList.toggle("dark", isDark);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // 手动切换主题
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <>
      <div
        className={`${
          isDark ? "dark bg-neutral-800" : "bg-white"
        } min-h-screen [&_*::selection]:bg-teal-200 dark:[&_*::selection]:bg-teal-500/30 [&_*::selection]:text-black dark:[&_*::selection]:text-white`}
      >
        <div className="max-w-xl mx-auto px-6 pt-8 space-y-4">
          {/* Theme Toggle Button - 右对齐 */}
          <div className="flex justify-end">
            <button onClick={toggleTheme} className="p-1 rounded-full">
              {isDark ? (
                <Moon className="w-4 h-4 text-white" />
              ) : (
                <Sun className="w-4 h-4 text-black" />
              )}
            </button>
          </div>

          {/* Header */}
          <header className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              <span className="font-dancing-script">Hi, I am lujie</span>
            </h1>
            <p className="flex items-center gap-2 text-black dark:text-white text-sm">
              <MapPin className="w-3 h-3" /> Shanghai, China
            </p>
            <p className="flex items-center gap-2 text-black dark:text-white text-sm">
              <Briefcase className="w-3 h-3" /> Trip.com
            </p>
            <p className="text-black dark:text-white text-sm max-w-xl">
              22 y.o. web developer. passionate about frontend development, but
              also intested in full stack development.
            </p>
          </header>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              Education
            </h2>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-black dark:text-white">
                <a
                  href="#"
                  className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                >
                  University of Melbourne
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs flex justify-between">
                <span>Master of Information Technology</span>
                <span>2023/02 - 2024/12</span>
              </p>
              <p className="text-black dark:text-white text-sm">
                in our capstone project, we successfully built and delivered a
                digital solution for managing 100+ cleaners for our client.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-black dark:text-white">
                <a
                  href="#"
                  className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                >
                  University of Adelaide
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs flex justify-between">
                <span>Bachelor of Computer Science and Mathematics</span>
                <span>2020/03 - 2022/12</span>
              </p>
              <p className="text-black dark:text-white text-sm">
                exchange student with fudan university in 2021.
                <br />
                australian institute for machine learning summer research
                scholarship, 2022.
              </p>
            </div>
          </section>

          {/* Experience & Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Section */}
            <section className="space-y-6">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-black dark:text-white">
                    <a
                      href="https://hk.trip.com"
                      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      Trip.com
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs flex justify-between">
                    <span>Software Engineer</span>
                    <span>2025/03 - present</span>
                  </p>
                  <p className="text-black dark:text-white text-sm">
                    vacation R&D department
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-black dark:text-white">
                    <a
                      href="https://www.bing.com/"
                      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      Microsoft
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs flex justify-between">
                    <span>Software Engineer</span>
                    <span>2023/11 - 2024/05</span>
                  </p>
                  <p className="text-black dark:text-white text-sm">
                    intern @ bing.com
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-black dark:text-white">
                    <a
                      href="https://www.skand.io/"
                      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      Skand
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs flex justify-between">
                    <span>Software Engineer</span>
                    <span>2023/07 - 2023/10</span>
                  </p>
                  <p className="text-black dark:text-white text-sm">
                    intern in development team, focus on frontend development.
                  </p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="space-y-6">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                Projects
              </h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-black dark:text-white">
                    <a
                      href="https://tailwind-landing-page-template-mocha-eta.vercel.app/"
                      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      The Shadow Manager
                    </a>
                  </h3>
                  <p className="text-black dark:text-white text-sm">
                    a platform (include web and mobile app) that helps admin to
                    manage the cleaners.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-black dark:text-white">
                    <a
                      href="https://my-profile-1-t9f3.vercel.app/"
                      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      PetVerse
                    </a>
                  </h3>
                  <p className="text-black dark:text-white text-sm">
                    a social networking platform designed specifically for pet
                    enthusiasts.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-black dark:text-white">
                    <a
                      href="https://xiaolinzzz.notion.site/Guide-to-Open-Chatrooms-3ee45b4f037b4c3f8cfd62a6fe875303?pvs=4"
                      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      ChatterMap
                    </a>
                  </h3>
                  <p className="text-black dark:text-white text-sm">
                    an innovative mobile app that lets you discover and join
                    chatrooms around your uni.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-black dark:text-white">
                    <a
                      href="https://github.com/XiaoLinZzz"
                      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
                    >
                      learn more
                    </a>
                  </h3>
                </div>
              </div>
            </section>
          </div>

          {/* Links */}
          <footer className="space-y-3 pb-5">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              links
            </h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/XiaoLinZzz"
                className="text-gray-600 dark:text-gray-200 text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
              >
                github
              </a>
              <a
                href="https://x.com/DayDayUpzzz"
                className="text-gray-600 dark:text-gray-200 text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
              >
                twitter
              </a>
              <a
                href="https://www.linkedin.com/in/lujie-ma/"
                className="text-gray-600 dark:text-gray-200 text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
              >
                linkedin
              </a>
              <a
                href="mailto:xiaolinzzz2002@gmail.com"
                className="text-gray-600 dark:text-gray-200 text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 dark:after:w-full after:bg-teal-500 dark:after:bg-white after:transition-all hover:after:w-full hover:text-teal-600 dark:hover:text-teal-400"
              >
                email
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
