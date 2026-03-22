export default function AnnouncementBanner() {
  return (
    <div
      className="relative bg-linear-to-r from-blue-500/10 to-sky-500/10 border-b border-blue-500/20 backdrop-blur-sm"
      role="status"
      aria-live="polite"
    >
      <div className="p-2">
        <div className="relative flex flex-col sm:flex-row items-center justify-center text-center min-h-10 gap-1 sm:gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 font-medium text-blue-700 dark:text-blue-300">
            <strong className="block text-sm"></strong>{" "}
            <span className="block text-sm"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
