import { newsData } from "../data/data";

const News = () => {
  return (
    <div className="h-[400px] w-[250px] bg-veryDarkBlue flex flex-col py-8 px-4">
      <h1 className="text-softOrange text-4xl font-semibold">New</h1>
      <div>
        {newsData.map(({ title, body }) => (
          <div>
            <p className="text-offWhite font-bold">{title}</p>
            <p className="text-grayishBlue text-[14px]">{body}</p>
            <div className="border-b w-full pt-2 border-grayishBlue" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
