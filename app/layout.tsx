import ProtectedLayout from "./ProtectedLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ProtectedLayout>{children}</ProtectedLayout>
            </body>
        </html>
    );
}
