import { Switch, Card } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";
import fetcher from "../libs/fetcher";
import useSWR from "swr";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home({ initialData }) {
  const { data } = useSWR(URL, fetcher, { initialData });
  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  if (status === "loading") {
    return null;
  }
  console.log(data);
  return (
    <>
      <div className="welcome">
        <Card style={{ width: 300, textAlign: "center", marginTop: "10%" }}>
          <h1>Hayai!</h1>
          <h4>Boilerplate</h4>
          <ThemeSwitcher />
        </Card>
        {data && (
          <>
            <h6>Forks: {data.forks_count}</h6>
          </>
        )}
      </div>
      <style jsx>{`
        .welcome {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h1 {
          font-size: 50px;
          margin-bottom: 0;
        }
        h4 {
          font-size: 20px;
          margin-top: 0;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetcher("https://api.github.com/repos/rafaelakiyoshi/hayai");
  return { props: { initialData: data } };
}
