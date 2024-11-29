import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Alena Gouse", following: false },
  { name: "tru she", following: true },
  { name: "gena lem", following: false },
  { name: "toorin jem", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg md-4">People To follow</h3>
      <div className="space-y-4">
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
