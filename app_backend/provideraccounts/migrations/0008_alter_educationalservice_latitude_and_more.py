# Generated by Django 4.2.13 on 2024-07-08 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('provideraccounts', '0007_alter_educationalservice_latitude_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='educationalservice',
            name='latitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='educationalservice',
            name='longitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='healthcareservice',
            name='latitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='healthcareservice',
            name='longitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='transportservice',
            name='latitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='transportservice',
            name='longitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
    ]
