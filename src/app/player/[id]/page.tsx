interface PlayerProfileProps {
  params: {
    id: string;
  };
}

export default function PlayerProfile({ params }: PlayerProfileProps) {
  return (
    <div>
      <h1>Player Profile: {params.id}</h1>
    </div>
  );
}