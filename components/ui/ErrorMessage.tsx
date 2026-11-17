export default function ErrorMessage({ message }: { message: string }) {
  return (
    <p role="alert" className="text-sm rounded-lg px-4 py-3 border text-red-700 bg-red-50 border-red-200">
      {message}
    </p>
  );
}
