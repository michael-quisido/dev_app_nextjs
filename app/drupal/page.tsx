import PageLayout from "@/components/PageLayout";

export default function Page() {
  return (
    <PageLayout title="Drupal Hosting">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '40px'
      }}>
        <div style={{ 
          backgroundColor: 'rgba(4, 15, 45, 0.9)', 
          padding: '60px', 
          borderRadius: '20px',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%'
        }}>
          <h1 style={{ 
            color: '#ffffff', 
            fontSize: '48px', 
            fontWeight: 'bold',
            marginBottom: '20px',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            Drupal Hosting
          </h1>
          <p style={{ 
            color: '#9d9d9d', 
            fontSize: '18px',
            lineHeight: '1.8',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            Enterprise-grade Drupal hosting with high performance and scalability. Perfect for complex websites and applications requiring robust content management.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
