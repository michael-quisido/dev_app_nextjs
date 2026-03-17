import PageLayout from "@/components/PageLayout";

export default function Page() {
  return (
    <PageLayout title="About Us">
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
            About Us
          </h1>
          <p style={{ 
            color: '#9d9d9d', 
            fontSize: '18px',
            lineHeight: '1.8',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            KMCQ GmbH, headquartered in Cebu, Philippines, has specialized in open-source industrial technology for 15 years. We believe secure, free communication is the foundation of progress; it has been our core source code for decades. As premier Linux experts, we provide professional, eye-level partnership to companies, the public sector, and individuals. By navigating diverse business landscapes, KMCQ GmbH enables customers to reclaim their digital sovereignty and maintain complete control over their essential technical infrastructure and data.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
