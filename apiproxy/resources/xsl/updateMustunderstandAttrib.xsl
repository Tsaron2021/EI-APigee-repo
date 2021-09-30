<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!-- identity template -->
  <xsl:template match="@*|node()">
      <xsl:copy><xsl:apply-templates select="@*|node()" /></xsl:copy>
  </xsl:template>
  
  <!-- match env:mustunderstand attributes only on the security header -->
  <xsl:template match="w:security/@env:mustunderstand"
        xmlns:w="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wsswcurity-secext-1.0.xsd"
        xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">
      <!-- and replace it with env:mustunderstand="0" -->
      <xsl:attribute name="env:mustunderstand">0</xsl:attribute>
    </xsl:template>
</xsl:stylesheet>