export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-4">
      <div className="flex gap-2">
        <div className="loader-dot w-3 h-3 rounded-full gradient-bg" />
        <div className="loader-dot w-3 h-3 rounded-full gradient-bg" />
        <div className="loader-dot w-3 h-3 rounded-full gradient-bg" />
      </div>
      <p className="text-sm text-muted-foreground font-medium">Loading...</p>
    </div>
  );
}
