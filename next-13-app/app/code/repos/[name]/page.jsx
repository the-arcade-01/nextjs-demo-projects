import Repo from "../../../components/Repo";
import RepoDirs from "../../../components/RepoDirs";

import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading dirs...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
